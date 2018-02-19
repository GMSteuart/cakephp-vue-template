<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;

use Cake\Core\Exception\Exception;
use Cake\Event\Event;
use Cake\Network\Exception\UnauthorizedException;
use Cake\ORM\TableRegistry;
use Cake\Network\Http\Client;
use Cake\Utility\Security;
use Firebase\JWT\JWT;

class UsersController extends AppController
{

    /**
     * Initialize
     *
     * Executed on class initialization
     */
    public function initialize() {
      parent::initialize();
      $this->Auth->allow(['token']);
    }

    /**
     * Before filter
     *
     * Executed before every action
     *
     * @param Event $event
     * @return \Cake\Network\Response|null
     */
    public function beforeFilter(Event $event)
    {
      return parent::beforeFilter($event);
    }

  /**
   * Token method
   *
   * Used to retrieve the users token based off the posted parameters
   *
   * Fields: email, password
   */
  public function token()
  {
    $user = $this->Auth->identify();
    if (!$user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    $this->set([
      'success' => true,
      'data' => [
        'user' => $user,
        'token' => JWT::encode([
          'sub' => $user['id'],
          'exp' =>  time() + 604800
        ],
          Security::salt())
      ],
      '_serialize' => ['success', 'data']
    ]);
  }
}