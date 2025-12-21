package org.example.smartsupportback.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionListDto {
    private Long id;
    private String message;
    private Date createdAt;
}
