### UMI学习  
入门学习：https://www.yuque.com/umijs/umi  

由于不熟悉typescript语法； 没有使用ts

### react理解  
- component  
可以理解为java中的类，同样有抽象、复用、继承的特性；
其`props`可以理解成，从父类继承到的属性，但是只能读取，不能写；
其`state`可以理解为类的成员变量，可以由component自由修改

- redux  
redux相当于一个spring容器，将所有的component管理起来。（实际上差距还是很大）  
当没使用redux时，每个component自己的state如果需要共享、传递、会很麻烦。  
redux将所有state集中管理， 在每个component要使用自己、其他组件的state时，可以类似spring一样，很方便的获取到：每个组件的state都被redux视为props，所以组件可以通过props获取到。
不同的地方是spring管理的就是组件，而redux只是管理组件中的state。  
所以当使用redux时，在组件中对state的依赖会简单很多，修改则必须通过reducer来操作  
