export interface courseSchema {
  id: string;
  title: string;
  duration: number;
  discount: number;
  description: string;
  thumbnail: string;
  updated_at: string;
  author: string;
}

export interface chapterSchema {
  id: string;
  course_id: string;
  title: string;
  video_url_title: string;
  order_index: number;
}
