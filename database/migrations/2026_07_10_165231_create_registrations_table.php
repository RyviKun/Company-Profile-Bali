<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('registrations', function (Blueprint $table) {
        $table->id();
        $table->foreignId('event_id')->constrained()->onDelete('cascade');
        $table->string('title')->nullable(); // Mr, Ms, Dr, etc.
        $table->string('name');
        $table->string('email');
        $table->string('company_name')->nullable();
        $table->text('address')->nullable();
        $table->string('province')->nullable();
        $table->string('telephone')->nullable();
        $table->string('mobile')->nullable();
        $table->string('language')->nullable(); // English, Indonesian, etc.
        $table->string('job_position')->nullable();
        $table->string('status')->default('pending'); // pending, confirmed, cancelled
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
