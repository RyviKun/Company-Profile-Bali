<?php

namespace App\Exports;

use App\Models\Registration;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class RegistrationsExport implements FromQuery, WithHeadings, WithMapping, ShouldAutoSize
{
    public function __construct(
        private int $eventId,
        private ?string $status = null,
    ) {}

    public function query()
    {
        return Registration::query()
            ->where('event_id', $this->eventId)
            ->when($this->status, fn ($q) => $q->where('status', $this->status))
            ->orderBy('created_at');
    }

    public function headings(): array
    {
        return [
            'No', 'Name', 'Email', 'Telephone', 'Company', 'Job Position',
            'Province', 'Address', 'Language', 'Purpose', 'VIP',
            'Status', 'Registered At',
        ];
    }

    public function map($r): array
    {
        static $no = 0;
        $no++;

        $custom = is_array($r->custom_fields)
            ? $r->custom_fields
            : (json_decode((string) $r->custom_fields, true) ?: []);

        return array_map([$this, 'safe'], [
            $no,
            $r->name,
            $r->email,
            $r->telephone,
            $r->company_name,
            $r->job_position,
            $r->province,
            $r->address,
            $r->language,
            $custom['tujuan'] ?? '',
            $r->isVip ? 'Yes' : 'No',
            $r->status,
            optional($r->created_at)->timezone('Asia/Jakarta')->format('Y-m-d H:i'),
        ]);
    }

    // Prevent Excel formula injection from user-submitted text
    private function safe($value)
    {
        if (is_string($value) && preg_match('/^[=+\-@\t\r]/', $value)) {
            return "'" . $value;
        }
        return $value;
    }
}