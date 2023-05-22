import requests

# 장고에서 스프링으로 정보 요청하는 함수
def get_webtoon_result(user):
  query = """
      mutation GET_RESULT {
          createResult(userId:"""+ str(user) +""") {
              myType{
                userType
                image
                count
                thumbnailTitle
                thumbnailCharacter
              }
              webtoonCounts
              platformRatio
              doneRatio
              genreRatio
          }
      }
  """

  url = "https://k8a7051.p.ssafy.io/apis"
  headers = {"Content-Type": "application/json"}
  response = requests.post(url, json={"query": query}, headers=headers)
  return response

def get_ranking(user):
  query = """
    query GET_RANKING {
      getRanking(userId:""" + str(user) + """) {
        myRank
        allUser
      }
    }
  
  """
  
  url = "https://k8a7051.p.ssafy.io/apis"
  headers = {"Content-Type": "application/json"}

  response = requests.post(url, json={"query": query}, headers=headers)
  return response
