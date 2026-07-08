export type DishCategory = 'Breakfast' | 'Lunch' | 'Dinner'
export type WeekDay =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export interface Dish {
  id: string
  name: string
  description?: string
  category?: DishCategory | undefined
  weekDay?: WeekDay | undefined
  isFavorite: boolean
  minutes: number | undefined
}
