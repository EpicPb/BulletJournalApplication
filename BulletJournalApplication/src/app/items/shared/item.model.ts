export class Item{
 $key: string;
 title: string;
}

export class Note extends Item{
  description: string;
}

export class Event extends Note{
  month: string;
  week: string;
  day: string;
}

export class Task extends Event{
  priority: string;
}
