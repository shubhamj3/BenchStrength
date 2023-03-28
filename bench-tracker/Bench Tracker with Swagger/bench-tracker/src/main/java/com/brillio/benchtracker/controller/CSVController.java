package com.brillio.benchtracker.controller;


import java.util.List;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

        import com.brillio.benchtracker.service.CSVService;
        import com.brillio.benchtracker.helper.CSVHelper;
        import com.brillio.benchtracker.message.ResponseMessage;
        import com.brillio.benchtracker.model.Employees;

//@CrossOrigin("http://localhost:3000")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001","http://localhost:3002"})
@RestController
@RequestMapping("/api/csv")
public class CSVController {

    @Autowired
    CSVService fileService;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
//        System.out.println("hello reached");
        String message = "";
//        int id=0;

        if (CSVHelper.hasCSVFormat(file)) {
            try {
                fileService.save(file);

                message = "1";
//                id=1;
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "0";
//                id=0;
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }

        }

        message = "Please upload a csv file!";
//        id=2;
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employees>> getAllEmployees() {
        try {
            List<Employees> employees = fileService.getAllEmployees();

            if (employees.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(employees, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}