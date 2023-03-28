package com.brillio.benchtracker.helper;

        import java.io.BufferedReader;
        import java.io.IOException;
        import java.io.InputStream;
        import java.io.InputStreamReader;
        import java.io.PrintWriter;
        import java.sql.Date;
        import java.util.ArrayList;
        import java.util.List;

        import org.apache.commons.csv.CSVFormat;
        import org.apache.commons.csv.CSVParser;
        import org.apache.commons.csv.CSVRecord;
        import org.springframework.web.multipart.MultipartFile;

        import com.brillio.benchtracker.model.Employees;

public class CSVHelper {
    public static String TYPE = "text/csv";
    static String[] HEADERs = { "employeeId", "employeeName", "skills", "industryExperience" , "department", "areaOfInterest", "email", "benchDate", "podName" };

    public static boolean hasCSVFormat(MultipartFile file) {

        if (!TYPE.equals(file.getContentType())) {
            return false;
        }

        return true;
    }

    public static Boolean isValid(String Str){
        try{


        if(((Object)Long.parseLong(Str)).getClass().getSimpleName()=="Long")
        {
            return true;
        }

        }
        catch (Exception e){return false;}
        return true;
    }
    public static List<Employees> csvToTutorials(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<Employees> employees = new ArrayList<Employees>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            Employees e=null;

            for (CSVRecord csvRecord : csvRecords) {
                String st;
                st=csvRecord.get("employeeId");
                if(isValid(st)) {
                     e = new Employees(
//                        Integer.parseInt(csvRecord.get("employeeId")),

                            Long.parseLong(csvRecord.get("employeeId")),
                            csvRecord.get("employeeName"),
                            csvRecord.get("skills"),
                            Integer.parseInt(csvRecord.get("industryExperience")),
                            csvRecord.get("department"),
                            csvRecord.get("areaOfInterest"),
                            csvRecord.get("email"),
//                        csvRecord.get("benchDate"),
                            Date.valueOf(csvRecord.get("benchDate")),
                            csvRecord.get("podName")

                    );
                }
                employees.add(e);
            }

            return employees;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }

}