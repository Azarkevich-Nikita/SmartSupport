package org.example.smartsupportback.repository;

import org.example.smartsupportback.dto.QuestionListDto;
import org.example.smartsupportback.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.domain.Pageable;

public interface QuestionsRepository extends JpaRepository<Question, Long> {
    @Query("""
        select new org.example.smartsupportback.dto.QuestionListDto(
            q.id,
            q.message,
            q.createdAt
        )
        from Question q
    """)
    Page<QuestionListDto> findAllForList(Pageable pageable);


}
