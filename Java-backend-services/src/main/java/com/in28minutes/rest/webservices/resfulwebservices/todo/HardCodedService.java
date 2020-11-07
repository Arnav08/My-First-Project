package com.in28minutes.rest.webservices.resfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class HardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static int id = 0;

	static {
		todos.add(new Todo(++id, "in28minutes", "learn to dance", new Date(), false));
		todos.add(new Todo(++id, "in28minutes", "learn to Microservices", new Date(), false));
		todos.add(new Todo(++id, "in28minutes", "learn to ang", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++id);
			todos.add(todo);
		}else {
			    deleteById(id);
			    todos.add(todo);
		}
		return todo;
		
	}
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo == null) {
			return null;
		}
		if(todos.remove(todo)) {
		return todo;
		}
		return null;
	}

	public Todo findById(long id2) {
		for (Todo todo : todos) {
			if (todo.getId() == id2) {
				return todo;
			}
		}
		return null;
	}
}
