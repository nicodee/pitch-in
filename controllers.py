'''
Created on Feb 5, 2013

@author: b3ngmann
'''
from config import *

class HomeHandler(Handler):
	def get(self):
		self.render("index.html") 	

class ProfileHandler(Handler):
	def get(self):
		self.render("profile.html") 	

class DiscoverHandler(Handler):
	def get(self):
		self.render("browse.html") 

class CreateHandler(Handler):
	def get(self):
		self.render("create.html") 

class ProjectHandler(Handler):
	def get(self):
		self.render("project.html") 

class PledgeHandler(Handler):
	def get(self):
		self.render("pledge.html") 

class PayHandler(Handler):
	def get(self):
		self.render("pay.html")

