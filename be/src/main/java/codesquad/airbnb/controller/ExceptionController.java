package codesquad.airbnb.controller;

import codesquad.airbnb.dto.ResponseMessage;
import java.util.NoSuchElementException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@ResponseBody
public class ExceptionController {

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity<ResponseMessage> handleReservationException(IllegalStateException exception) {
        ResponseMessage message = new ResponseMessage(HttpStatus.NOT_FOUND, exception.getMessage());

        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ResponseMessage> handleJwtException(NoSuchElementException exception) {
        ResponseMessage message = new ResponseMessage(HttpStatus.FORBIDDEN, exception.getMessage());

        return new ResponseEntity<>(message, HttpStatus.FORBIDDEN);
    }
}
