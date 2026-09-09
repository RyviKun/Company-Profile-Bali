<!DOCTYPE html>
<html>
<head>
    <title>Registration Confirmation</title>
</head>
<body>
    <h2>Thank you for registering, {{ $registration->name }}!</h2>
    <p>You have successfully registered for <strong>{{ $registration->event->title }}</strong>.</p>

    <h3>Your QR Code for Check‑in</h3>
    <img src="data:image/png;base64,{{ base64_encode($qrImageData) }}" alt="QR Code" style="width:200px;height:200px;">

    <p>Please present this QR code at the event entrance.</p>

    <p>Event Details:</p>
    <ul>
        <li><strong>Date:</strong> {{ \Carbon\Carbon::parse($registration->event->start_date)->format('d M Y') }} – {{ \Carbon\Carbon::parse($registration->event->end_date)->format('d M Y') }}</li>
        <li><strong>Venue:</strong> {{ $registration->event->address }}</li>
    </ul>

    <p>We look forward to seeing you!</p>
</body>
</html>