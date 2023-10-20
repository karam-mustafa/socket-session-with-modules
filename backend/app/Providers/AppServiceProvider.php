<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
//        /**
//         * Register Custom Migration Paths
//         */
//        $this->loadMigrationsFrom([
//            database_path().DIRECTORY_SEPARATOR.'migrations'.DIRECTORY_SEPARATOR.'folder1',
//            database_path().DIRECTORY_SEPARATOR.'migrations'.DIRECTORY_SEPARATOR.'folder2',
//        ]);
    }
}
