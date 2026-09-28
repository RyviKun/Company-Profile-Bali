<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Rule;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Mail;
use App\Mail\RegistrationConfirmation;
use Illuminate\Support\Facades\Log;
class RegistrationController extends Controller
{
    // Show registration form for a specific event
    public function create(Event $event)
    {
        return Inertia::render('Registration/Create', [
            'event' => $event,
        ]);
    }

    // Store registration
    public function store(Request $request, Event $event)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:20',
            'name' => 'required|string|max:255',
            'email' => [    
                'required',
                'email',
                'max:255',
                Rule::unique('registrations')->where(function ($query) use ($event) {
                    return $query->where('event_id', $event->id);
                }),
            ],
            'company_name' => 'nullable|string|max:255',
            'address' => 'nullable|string',
            'province' => 'nullable|string|max:100',
            'telephone' => [
                'nullable',
                'string',
                'max:20',
                Rule::unique('registrations')->where(function ($query) use ($event) {
                    return $query->where('event_id', $event->id);
                }),
            ],
            'language' => 'nullable|string|max:50',
            'job_position' => 'nullable|string|max:100',
            'isVip' => 'boolean',
        ], [
            'email.unique' => 'This email is already registered in this event.',
            'telephone.unique' => 'This phone number is already registered for this event.',
        ]);

        // Generate QR token
        $qrToken = Str::uuid()->toString();

        // Create the registration record
        $registration = Registration::create(array_merge($validated, [
            'event_id' => $event->id,
            'qr_token' => $qrToken,
        ]));

        // Build QR code using named arguments
        $result = (new Builder(
            writer: new PngWriter(),
            data: $qrToken,
            encoding: new Encoding('UTF-8'),
            errorCorrectionLevel: ErrorCorrectionLevel::High,
            size: 300,
            margin: 10,
        ))->build();

        // Get binary PNG data
        $qrImageData = $result->getString();

        try {
            Mail::to($validated['email'])->send(new RegistrationConfirmation($registration, $qrImageData));
        } catch (\Exception $e) {
            Log::error('Failed to send registration email: ' . $e->getMessage());
        }

        // Flash QR code (base64) to frontend for modal
        $qrBase64 = base64_encode($qrImageData);

        return redirect()->route('event.show', $event->slug)
            ->with('success', 'Registration submitted successfully!')
            ->with('qr_code', $qrBase64)
            ->with('registrant_name', $registration->name);
    }

    // Admin: List all registrations for an event
    public function index(Event $event)
    {
        $registrations = $event->registrations()->latest()->get();
        return Inertia::render('Registration/Index', [
            'event' => $event,
            'registrations' => $registrations,
        ]);
    }

    // Admin: Update registration status
    public function update(Request $request, Registration $registration)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,confirmed,cancelled',
        ]);

        $registration->update($validated);

        return back()->with('success', 'Registration updated.');
    }

    public function checkToken($token)
    {
        // Find registration by qr_token
        $registration = Registration::where('qr_token', $token)->first();

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid QR code or registration not found.',
            ], 404);
        }

        // Load the associated event
        $registration->load('event');

        return response()->json([
            'success' => true,
            'data' => [
                'registration' => $registration,
                'event' => $registration->event,
            ],
        ]);
    }
}