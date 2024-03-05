<?php

namespace App\Repositories\UserContact;

use App\Models\UserContact;
use App\Repositories\Eloquent\BaseRepository;

class UserContactRepository extends BaseRepository implements UserContactRepositoryInterface
{
    public function __construct(UserContact $model)
    {
        parent::__construct($model);
    }
}