# Superuser Task Runner

- [x] Task dependencies: Allow tasks to depend on other tasks, ensuring they run in the correct order.
- [x] Caching: Implement caching of task outputs to avoid re-running tasks that haven't changed.
- [x] Parallelization: Add the ability to run multiple tasks in parallel to improve performance.
- [ ] Environment variable support: Allow tasks to define environment variables that should be set during execution.
- [x] Logging levels: Implement different logging levels (verbose, quiet, etc.) for better debugging.
- [ ] Watch mode: Add the ability to watch files and automatically run tasks when they change.
- [x] Filtering: Allow running only tasks that match certain patterns or criteria.
- [x] Output capture: Provide options to capture and process command output rather than just inheriting stdio.
- [x] Error handling strategies: Add options for how to handle errors (stop execution, continue, retry, etc.).
- [x] Task timing: Track and report how long each task takes to run.
- [ ] Configuration validation: Validate the meth.json file against a schema to catch configuration errors early.
- [ ] API interface: Create a programmatic API so other tools can integrate with your task runner.
- [x] Interactive UI: Add a simple interactive UI for selecting and running tasks without command-line arguments.
- [ ] Remote execution: Allow tasks to be run on remote machines or in containers.
