<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index, follow">
        <meta name="theme-color" content="#1a1a2e">

        {{-- Default title (fallback – will be overridden by @inertiaHead) --}}
        <title inertia>{{ config('app.name', 'MediaExpo Indonesia') }}</title>

        {{-- Default meta (fallback – will be overridden by @inertiaHead) --}}
        <meta inertia name="description" content="{{ config('app.description', 'MediaExpo Indonesia – Professional event organizer for exhibitions, conferences, and corporate events.') }}">
        <meta inertia property="og:title" content="{{ config('app.name') }}">
        <meta inertia property="og:description" content="{{ config('app.description', 'MediaExpo Indonesia – Professional event organizer.') }}">
        <meta inertia property="og:image" content="{{ asset('images/og-default.jpg') }}">
        <meta inertia property="og:url" content="{{ url()->current() }}">
        <meta inertia property="og:type" content="website">
        <meta inertia property="og:site_name" content="{{ config('app.name') }}">
        <meta inertia name="twitter:card" content="summary_large_image">
        <meta inertia name="twitter:title" content="{{ config('app.name') }}">
        <meta inertia name="twitter:description" content="{{ config('app.description', 'MediaExpo Indonesia – Professional event organizer.') }}">
        <meta inertia name="twitter:image" content="{{ asset('images/og-default.jpg') }}">

        {{-- Canonical fallback (overridable by React) --}}
        <link inertia rel="canonical" href="{{ url()->current() }}">

        {{-- Inline style to set HTML bg color --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }
            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        {{-- Favicons --}}
        <link rel="icon" href="/images/logo/logo.ico" sizes="any">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        {{-- Preconnect for performance --}}
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="preconnect" href="https://res.cloudinary.com">
        <link rel="dns-prefetch" href="https://res.cloudinary.com">

        {{-- Google Fonts --}}
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        {{-- Inertia and Vite --}}
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])

        {{-- Per-page <head> tags (from React) – overrides everything above --}}
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>