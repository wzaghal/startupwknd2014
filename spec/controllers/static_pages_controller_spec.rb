require 'spec_helper'

describe StaticPagesController do

  describe "GET 'subscribe'" do
    it "returns http success" do
      get 'subscribe'
      response.should be_success
    end
  end

  describe "GET 'confirm'" do
    it "returns http success" do
      get 'confirm'
      response.should be_success
    end
  end

end
