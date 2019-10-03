package com.example.demo.controller;

import com.example.demo.entity.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ControllrtAll {
    @Autowired
    private AddpointRepository addpointRepository;
    @Autowired  private MoldRepository moldRepository;
    @Autowired  private PointRepository pointRepository;
    @Autowired  private ResponsibleRepository responsibleRepository;

    //======================================================================================================================
    @GetMapping(path = "/addpoint")
    private Collection<Addpoint> getAddpoint(){
        return this.addpointRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping(path = "/point")
    private Collection<Point>getPoint() {
        return this.pointRepository.findAll().stream().collect(Collectors.toList());
    }
    //======================================================================================================================
    @PostMapping(path = "/point/{other}/{date}/{addPoint}/{nameM}/{nameS}")
    public Point point(@PathVariable String other, @PathVariable Date date, @PathVariable Long addPoint, @PathVariable Long nameM , @PathVariable Long nameS){

        Point point = new Point();
        point.setOther(other);
        point.setDate(date);

        Addpoint addpoint1 = addpointRepository.findById(addPoint).get();
        point.setAddpoint(addpoint1);

        Mold moldxy1 = moldRepository.findById(nameM).get();
        point.setMold(moldxy1);

        Responsible responsible = responsibleRepository.findById(nameS).get();
        point.setResponsible(responsible);

        pointRepository.save(point);
        return point;
    }

    //=============================================== GetMap ===============================
  
    @DeleteMapping("/point/{id}")
    public void deletePoint(@PathVariable Long id)
    {
        pointRepository.deleteById(id);
    }


}
