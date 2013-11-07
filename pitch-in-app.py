'''
Created on Jan 24, 2013

@author: b3ngmann
'''

from controllers import *
			
		
app = webapp2.WSGIApplication(
							[ ('/', HomeHandler),
							 ('/profile',ProfileHandler),
							 ('/discover.*', DiscoverHandler),
							 ('/create', CreateHandler),
							 ('/project.*', ProjectHandler),
							 ('/pledge.*', PledgeHandler),
							 ('/pay.*', PayHandler), ], 
							debug=True)
						