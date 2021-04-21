package com.ycsyxt.controller;

import com.ycsyxt.entity.Server;
import com.ycsyxt.vo.AjaxResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author yuxt
 * @date 2021/4/21
 */
@RestController
@RequestMapping("/monitor")
public class ServerController
{
    @GetMapping("/server")
    public AjaxResult getInfo() throws Exception
    {
        Server server = new Server();
        server.copyTo();
        return AjaxResult.success(server);
    }
}
