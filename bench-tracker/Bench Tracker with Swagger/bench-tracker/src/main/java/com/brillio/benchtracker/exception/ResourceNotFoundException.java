package com.brillio.benchtracker.exception;

import com.brillio.benchtracker.message.ResponseMessage;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class ResourceNotFoundException extends ClassNotFoundException {


    public HttpEntity<ResponseMessage> ResponseEntity (NoHandlerFoundException exc) {
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage("Employee Not Found"));
    }
}
