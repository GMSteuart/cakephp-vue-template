<?php
namespace App\Controller\Api;

use Cake\Controller\Controller;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
use Cake\Event\Event;

class AppController extends Controller {

  public $components = [
    'RequestHandler',
//    'Acl' => [
//      'className' => 'Acl.Acl'
//    ]
  ];

  /**
   * Initialization hook method.
   *
   * Use this method to add common initialization code like loading components.
   *
   * e.g. `$this->loadComponent('Security');`
   *
   * @return void
   */
  public function initialize()
  {
    parent::initialize();

    $this->loadComponent('Auth', [
      'storage' => 'Memory',
      'authenticate' => [
        'Form' => [
          'fields' => [
            'username' => 'email'
          ],
          'finder' => 'auth'
        ],
        'ADmad/JwtAuth.Jwt' => [
          'userModel' => 'Users',
          'fields' => [
            'username' => 'id'
          ],
          'parameter' => 'token',
          'queryDatasource' => true,
        ]
      ],

      'unauthorizedRedirect' => false,
      'checkAuthIn' => 'Controller.initialize',
      'loginAction' => false
    ]);
  }

  /**
   * Before Filter method
   *
   * Ran after initialize method to instantiate class variables we may need
   * and check permissions. Look at CakePHP 3 controller lifecycle for more info.
   *
   * @param Event $event
   * @return \Cake\Network\Response|null
   */
  public function beforeFilter(Event $event)
  {
    $this->Auth->allow();
    return parent::beforeFilter($event);
  }

  public function beforeRender(Event $event)
  {
    $this->RequestHandler->renderAs($this, 'json');
    $this->response->type('application/json');
    $this->set('_serialize', true);
  }
}