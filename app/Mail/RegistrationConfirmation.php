<?php

namespace App\Mail;

use App\Models\Registration;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public Registration $registration;
    public string $qrImageData; // binary PNG

    public function __construct(Registration $registration, string $qrImageData)
    {
        $this->registration = $registration;
        $this->qrImageData = $qrImageData;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Your Registration Confirmation - ' . $this->registration->event->title,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.registration_confirmation',
        );
    }

    public function attachments(): array
    {
        return [
            Attachment::fromData(fn () => $this->qrImageData, 'qr-code.png')
                ->withMime('image/png'),
        ];
    }
}