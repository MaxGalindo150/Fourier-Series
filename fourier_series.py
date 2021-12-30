import turtle
from math import sqrt, sin, cos, pi
import numpy as np

screen = turtle.Screen()

t1 = turtle.Turtle(shape='circle')
t1.color('blue')


t2 = turtle.Turtle()
t2.color('red')
t2.speed(10)

#funcion de una circunferencia
#x^2 + y^2 = r^2
# y = sqrt(r^2 - x^2)
r = 100
#t1.left(45) # convertir de rad a grados
rads = np.linspace(0,2*pi,1000)


while True:
    for th in rads:
        t1.goto(r*cos(th), r*sin(th))














# while True:
#     for x in range(-100,100):
#         t2.penup()
#         t2.goto(x,(sqrt(r**2 - (x**2))))
#         t1.goto(x,(sqrt(r**2 - (x**2))))
#         t2.pendown()
#         t2.goto(300,(sqrt(r**2 - (x**2))))
#     for i in range(100,-100,-1):
#         t2.goto(x,-(sqrt(r**2 - (x**2))))
#         t1.goto(x,-(sqrt(r**2 - (x**2))))
#         t2.goto(300,-(sqrt(r**2 - (x**2))))


# for x in range(-100,100):
#     t1.goto(x,-(sqrt(r**2 - (x**2))))




turtle.done()