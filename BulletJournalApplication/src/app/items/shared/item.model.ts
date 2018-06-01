export class Item{
 $key: string;
 title: string;
 // datetime: string;
}

export class Note extends Item{
  note: string;
}

export class Evont extends Note{
  month: string;
  day: string;
  year: string;
}

export class Task extends Evont{
  priority: string;
  tags: string[];
}


export class Tag{
  tags:string[]
}
