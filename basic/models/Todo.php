<?php
namespace app\models;

use yii\base\Model;

/**
 * @SWG\Definition(required={"todo"})
 *
 * @SWG\Property(property="todo", type="object", example="Task N")
 * */
class Todo extends Model
{
    public $id;
    public $title;
    public $content;

    private static $todos = [
        '100' => [
            'title' => 'Task 1',
            'content' => 'Some Record 1',
        ],
        '101' => [
            'title' => 'Task 2',
            'content' => 'Some Record 2',
        ],
    ];


    /**
     * {@inheritdoc}
     */
    public static function getAll()
    {
        $result = [];

        foreach (self::$todos as $todo){
            $result[] = [
                'title' => $todo['title'],
                'content' => $todo['content']
            ];
        }

        if(empty($result)){
            $result[]= [
                'title' => 'Записей пока еще нет!',
                'content' => 'Нажмите кнопку "Добавить", чтобы создать запись'
            ];
        }
        return $result;
    }


    /**
     * {@inheritdoc}
     */
    public static function setTodo($todo){
        if(!empty($todo)){
            self::$todos[] = [
                'title' => $todo['title'],
                'content' => $todo['content']
            ];
        }
        return self::$todos;
    }
}


