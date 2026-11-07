<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('event_id');
            $table->string('title')->nullable();
            $table->string('name');
            $table->string('email');
            $table->string('company_name')->nullable();
            $table->text('address')->nullable();
            $table->string('province')->nullable();
            $table->string('telephone')->nullable();
            $table->string('language')->nullable();
            $table->string('job_position')->nullable();
            $table->string('status')->default('pending');
            $table->string('qr_token')->nullable()->unique();
            $table->timestamps();
            $table->boolean('isVip')->default(false);

            $table->unique(['event_id', 'email']);
            $table->unique(['event_id', 'telephone']);
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
