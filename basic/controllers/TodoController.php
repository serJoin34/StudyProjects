<?php
namespace app\controllers;

use Yii;
use yii\rest\Controller;
use app\models\Todo;

/**
 * Class TodoController
 */
class TodoController extends Controller
{

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['corsFilter' ] = [
            'class' => \yii\filters\Cors::className(),
        ];
        $behaviors['contentNegotiator'] = [
            'class' => \yii\filters\ContentNegotiator::className(),
            'formats' => [
                'application/json' => \yii\web\Response::FORMAT_JSON,
            ],
        ];
        return $behaviors;
    }


    /**
     * @SWG\Get(
     *     path="/api/todos",
     *     tags={"Todo"},
     *     summary="Retrieves the collection of Todo resources.",
     *     @SWG\Response(
     *         response = 200,
     *         description = "Todo collection response",
     *     ),
     * )
     */

    public function actionIndex(){
        $model = Todo::getAll();
        return $model;
    }


    /**
     * @SWG\Post(
     *     path = "/api/todos",
     *     tags = {"Todo"},
     *     summary = "Create Todo",
     *     produces = {"application/json"},
     *     consumes = {"application/json"},
     *     @SWG\Parameter (
     *         in = "body",
     *         name = "task",
     *         description = "Task object",
     *         required = true,
     *         type = "object",
     *         @SWG\Schema(ref = "#\Todo")
     *     ),
     *     @SWG\Response(
     *         response = 200,
     *         description = "The todo was created",
     *     )
     * )
     */

    function actionCreate()
    {
        if (!empty(Yii::$app->request->bodyParams)) {
            try {
                $model = Todo::setTodo(Yii::$app->request->bodyParams);
                return $model;
            } catch (RuntimeException $e) {
                Yii::$app->errorHandler->logException($e);
                Yii::$app->session->setFlash('error', $e->getMessage());
            }
        }
        return $this->model;
    }


}