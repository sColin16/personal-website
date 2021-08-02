# Summary

Gearbox has been my brain child for many years, and as my development skills
have improved, so too has the design of Gearbox. Although Gearbox started as a
simple JavaScript framework to make it easier for me to simulate games, it has
developed into a robust reinforcement learning toolkit designed to be more
modular than existing libraries.

# Iteration 0: An Idea Is Born

Following the creation of my [Tic-Tac-Toe reinforcement learning
agent](https://github.com/sColin16/Tic-Tac-Toe-Learning), I was interested in
creating similar agents for other games, but my code was not modular enough to
easily support that. As a result, I decided to start abstracting parts of my
code, an effort that eventually led to creating a general purpose library. But
the scope of this effort quickly ballooned beyond my ability level as I created
components that included a complex hierarchy of agent types. Overwhelmed, I
temporarily dropped the idea.

# Iteration 1: An Idea Becomes Reality

About a year later, I decided to try again. This time, I did research into
classifications of games I wanted to simulate, and went through many design
iterations to define the initial Gearbox API. I decided to write this initial
library in JavaScript because it would be easy to make animated games with
[p5.js](https://p5js.org/), a library I had used for many years. The outcome was
a functional library that allowed me to simulate rock-paper-scissors.

# Iteration 2: The First Refactor

With some code written, I was better able to identify redundancies, and
performed a significant refactor to allow components to share functionality. As
a result, I was able to add many utility functions for common use-cases, and
improve the API by creating four different environments of various types. The
outcome was an environment simulation API that wasn't just functional, but also
extensible.

# Iteration 3: Another Major Refactor

Although I had an extensible API, I was encountering problems with how to enable
data transformations in the system. Although leveraging inheritance would have
been sufficient, I decided it wasn't ideal, since it made it difficult to
reuse these "wrappers" across different classes. After contemplating many
different solutions, I settled on creating a new library called "Pneumatic." Its
job was to implement middlemen that applied arbitrary transformations (such as
partial state observation) between two objects. The result was a complete
modular API to support environment simulation.

# Iteration 4: Getting Serious

A little while later, I reevaluated some of the decisions that I made,
especially the choice to develop a JavaScript library, given that Python is a
much more popular language for data science. I investigated existing libraries
in Python, and found that [OpenAI's Gym](https://github.com/openai/gym),
[SuperSuit](https://github.com/PettingZoo-Team/SuperSuit), and
[PettingZoo](https://github.com/PettingZoo-Team/PettingZoo) are popular
libraries for reinforcement learning environment simulation, that implement core
features of Gearbox including multi-agent environments and data transformations.

With this collection of libraries offering many of the features I thought were
unique to Gearbox, I was forced to reevaluate Gearbox's goals. As a result, I
concluded that Gearbox is uniquely poised to reimagine the API for reinforcement
learning environments, especially with regards to modularity.  Gym's
Environments combine many features into a single class, including environment
logic, observation generation, and even rendering. Although this single package
of features is useful for researchers (Gym's target user), it poses problems
with modularity and extensibility for software development more generally.

As a result, I am now creating Gearbox in Python to leverage the language's
incredible data science ecosystem, and am focusing on making the library simple
and modular to differentiate it from existing libraries. Furthermore, I plan to
lean on the existing libraries to identify the types of features that are
in-demand, and to possibly enable plugins for users to leverage existing
environments in other libraries, since it doesn't seem that Gym is going
anywhere anytime soon.
