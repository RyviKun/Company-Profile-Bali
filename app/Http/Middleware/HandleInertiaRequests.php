<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'breadcrumbs' => fn () => $this->generateBreadcrumbs($request)
        ];
    }

    private function generateBreadcrumbs(Request $request): array
    {
        $routeName = $request->route()->getName();
        $breadcrumbs = [];

        // Always start with Home
        $breadcrumbs[] = [
            'label' => 'Home',
            'url' => route('home'),
        ];

        // The match statement MUST be INSIDE this method
        match ($routeName) {
            'aboutus' => $breadcrumbs[] = [
                'label' => 'About Us',
                'url' => route('aboutus'),
            ],
            'event.show' => $this->addEventBreadcrumbs($request, $breadcrumbs),
            'event' => $breadcrumbs[] = [
                'label' => 'Events',
                'url' => route('event'),
            ],
            default => null,
        };

        return $breadcrumbs;
    }

    private function addEventBreadcrumbs(Request $request, array &$breadcrumbs): void
    {
        $breadcrumbs[] = ['label' => 'Events', 'url' => route('event')];
        $event = $request->route('slug'); // Or fetch the actual model if passed

        $slug = $request->route('slug');
        if ($slug) {
            $eventModel = \App\Models\Event::where('slug', $slug)->first();
            if ($eventModel) {
                $breadcrumbs[] = [
                    'label' => $eventModel->title,
                    'url' => null, // Current page
                ];
            }
        }
    }

}
