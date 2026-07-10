<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Registration;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            'email' => 'required|email|max:255',
            'company_name' => 'nullable|string|max:255',
            'address' => 'nullable|string',
            'province' => 'nullable|string|max:100',
            'telephone' => 'nullable|string|max:20',
            'mobile' => 'required|string|max:20',
            'language' => 'nullable|string|max:50',
            'job_position' => 'nullable|string|max:100',
        ]);

        $registration = $event->registrations()->create([
            ...$validated,
            'status' => 'pending',
        ]);

        return redirect()->route('event.show', $event->slug)
            ->with('success', 'Registration submitted successfully!');
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
}