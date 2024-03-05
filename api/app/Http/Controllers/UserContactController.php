<?php

namespace App\Http\Controllers;

use App\Enums\ResponseStatus;
use App\Http\Requests\StoreUserContactRequest;
use App\Repositories\UserContact\UserContactRepositoryInterface;

class UserContactController extends Controller
{
    private $userContactRepository;

    // Constructor
    public function __construct(UserContactRepositoryInterface $userContactRepository)
    {
        $this->userContactRepository = $userContactRepository;
    }

    /**
     * Get all user contacts
     *
     * @route GET /api/user-contacts
    */
    public function index()
    {
        $userContacts = $this->userContactRepository->getAll();

        if(!isset($userContacts))
        {
            $this->message = 'Get user contacts failed.';
            goto end;
        }

        $this->status = ResponseStatus::Success;
        $this->message = 'Get user contacts success.';
        end:
        return $this->response($userContacts);
    }

    /**
     * Create user contact
     *
     * @route POST /api/user-contacts
    */
    public function store(StoreUserContactRequest $request)
    {
        $userContact = $this->userContactRepository->create($request->all());

        if(!$userContact)
        {
            $this->message = 'Create user contact failed.';
            goto end;
        }

        $this->status = ResponseStatus::Success;
        $this->message = 'Create user contact success.';
        end:
        return $this->response($userContact);
    }
}