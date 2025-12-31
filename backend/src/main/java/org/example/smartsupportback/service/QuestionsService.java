package org.example.smartsupportback.service;

import org.example.smartsupportback.dto.QuestionListDto;
import org.example.smartsupportback.repository.QuestionsRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

@Service
public class QuestionsService {
    private final QuestionsRepository questionsRepository;

    public QuestionsService(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }


    public Page<QuestionListDto> getQuestions(Pageable pageable){
        return questionsRepository.findAllForList(pageable);
    }
}
