package com.pinbar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.pinbar.bean.Player;
import com.pinbar.bean.Statistics;

@Controller
@CrossOrigin(origins = "http://localhost:9001")
@RequestMapping("/players")
public class BuckeyeController {

	@Autowired
	private Player player;
	
	@Autowired
	private Statistics statistics;

	@RequestMapping(value = "/qb", produces = "application/json")
	@ResponseBody
	public Player playerInfo() {

		try {
			Thread.sleep(1500);
		} catch(InterruptedException e) {
			System.out.println("thread interrupted");
		}
		player.setName("JT Barrett");
		return player;
	}
	
	@RequestMapping(value = "/stats", produces = "application/json")
	@ResponseBody
	public Statistics playerStats() {

		//statistics = null;
		
		statistics.setPassingYards(253);
		statistics.setRushingYards(95);
		
		return statistics;
	}

}
