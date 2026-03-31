import random

predictions = [
    "Скоро тебя ждет великое открытие.",
    "Не бойся перемен, они принесут удачу.",
    "Звезды благосклонны к твоим начинаниям.",
    "Впереди тебя ждет неожиданная встреча.",
    "Твои усилия скоро окупятся."
]

def get_prediction():
    return random.choice(predictions)

if __name__ == "__main__":
    print(get_prediction())
