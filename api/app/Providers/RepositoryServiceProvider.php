<?php

namespace App\Providers;

use App\Repositories\UserContact\UserContactRepository;
use App\Repositories\UserContact\UserContactRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(UserContactRepositoryInterface::class, UserContactRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}