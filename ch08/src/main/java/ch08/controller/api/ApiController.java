package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class ApiController {
    @ResponseBody
    @RequestMapping("/text")
    public String text() {
        return "text";
    }

    @RequestMapping("/html")
    public String html() {
        return "html";
    }
}
