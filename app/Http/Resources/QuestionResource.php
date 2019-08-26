<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'path' => $this->path,
            'body' => $this->body,
            'replies' => ReplyResource::collection($this->replies),
            'reply_count' => $this->replies->count(),
            'user' => $this->user->name,
            'created' => $this->created_at->diffForHumans(),
             'id' => $this->id,
             'user_id' => $this->user_id
        ];
    }
}
