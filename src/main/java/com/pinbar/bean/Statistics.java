package com.pinbar.bean;

import org.springframework.stereotype.Component;

@Component
public class Statistics {

	private int playerId;
	private int passingYards;
	private int rushingYards;
	
	public int getPlayerId() {
		return playerId;
	}
	public void setPlayerId(int playerId) {
		this.playerId = playerId;
	}
	public int getPassingYards() {
		return passingYards;
	}
	public void setPassingYards(int passingYards) {
		this.passingYards = passingYards;
	}
	public int getRushingYards() {
		return rushingYards;
	}
	public void setRushingYards(int rushingYards) {
		this.rushingYards = rushingYards;
	}

}
