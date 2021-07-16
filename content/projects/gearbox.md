# About

Gearbox is a JavaScript framework to simulate reinforcement learning
environments. It boasts more complete features than existing frameworks or
libraries, including the ability to handle multiple agents, manage complex
states, provide agents with rich information about changes to the environment,
and enable data transformations that allow for partial observations and other
advanced reinforcement learning use cases. Gearbox currently offers a few
built-in game environments, and an extendable API to simulate many differ
different types of environments.

# Motivation

The idea for Gearbox came from making
[this Tic-Tac-Toe reinforcement learning player](https://github.com/sColin16/Tic-Tac-Toe-Learning).
After I had completed it, I was interested in extending it to other games, such
as Connect Four, but the code I had written was not particularly extendable.
Thus, Gearbox was born to enable more streamlined development of reinforcement
learning agents.

# Why Gearbox?

A core part of developing a reinforcement learning agent is simulating the
environment, and although every environment is unique, there are facets of
simulating an environment that are universal. This includes managing which
agent is allowed to take an action, handling invalid actions, and notifying
agents when the state has changed. Gearbox provides a basis for all such facets
and more, filling a gap in existing libraries and frameworks. Furthermore,
providing this basis for environment simulation opens up doors to further layers
of abstraction, such as standard APIs for common reinforcement learning
environments and tasks.

# What's Next?

Gearbox is a work in progress, and has been rewritten multiple times as my
software development skills have improved. I plan to refactor the class
structure, and am considering porting the project to Python, which has a more
complete ecosystem of reinforcement learning algorithms that could leverage
Gearbox.