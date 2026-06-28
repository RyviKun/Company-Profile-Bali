<?php
namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function index(Request $request): Response
    {
        // Fetch paginated events (10 per page)
        $events = Event::paginate(10);

        return Inertia::render('event/index', [
            'events' => $events,
        ]);
    }

    public function show(string $slug)
    {
        $event = Event::where('slug', $slug)->firstOrFail();

        return inertia::render('event/show', [
            'event' => $event
        ]);
    }
}