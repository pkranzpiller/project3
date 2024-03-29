package com.revature.services;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.revature.entities.Content;

public interface SearchService {

	public Set<Content> filterContentByTitle(String title);
	
	public Set<Content> filterContentByFormat(String format);
	
	public Set<Content> filterContentBySubjects(List<Integer> moduleIds);
	
	public Set<Content> getContentByModuleId(int moduleId);
	
	public Set<Content> filter(String title, String format, List<Integer> modules);
	
	public Set<Content> filterContent(Set<Content> contents, Map<String, Object> filters);
}
