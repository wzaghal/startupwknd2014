class SubscribersController < ApplicationController
	def new
		@subscriber= Subscriber.new
	end

	def create
		@subscriber = Subscriber.new(params[:subscriber])
		if @subscriber.save
			redirect_to new_subscriber_path
		end
	end 

end
