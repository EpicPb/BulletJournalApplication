export class Item{
 $key: string;
 title: string;
 datetime: string; 
}

export class Note extends Item{
  description: string;
}

export class Evont extends Note{
  month: string;
  week: string;
  day: string;
}

export class Task extends Event{
  priority: string;
}
