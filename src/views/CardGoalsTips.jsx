import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import MUButton from "@material-ui/core/Button";


function CardGoalsTips(props) {
  const [localState, setLocalState] = useState({
    outputTips: 1
  });


  //fancy buttons
  const [button1, setButton1] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0
  });
  const [button2, setButton2] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0
  });
  const [button3, setButton3] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0
  });
  const [button4, setButton4] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0
  });

  const style = {
    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    width: 105,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    marginLeft: 0
  };



  return (
    <Grid item xs={12}>
      <div className="goals-container">
        {localState.outputTips === 0 ? (
          <Card
            style={{
              maxWidth: 500,
              minHeight: 500,
              opacity: 0.8,
              margin: "auto",
              marginBottom: 20,
              marginTop: 20,
              padding: 20,
              backgroundColor: "#272727"
            }}
          ></Card>
        ) : (
          <Card
            style={{
              maxWidth: 500,
              minHeight: 500,
              opacity: 0.95,
              borderRadius: 20,
              margin: "auto",
              marginBottom: 20,
              marginTop: 20,
              padding: 20,
              backgroundColor: "#272727",
              color: "#e7e7e7"
            }}
          >
            {localState.outputTips === 1 ? (
              <>
                <h2> How To Save Money - Top Saving Tips </h2>{" "}
                <h4>By Lisa MacColl</h4> <h5>18 min Read</h5>{" "}
                <h5>
                  You're wondering how to save money. It can be tough, but we
                  have all the tips and tactics you need to get started saving
                  money...
                </h5>{" "}
                <a
                  href="https://www.wealthsimple.com/en-ca/learn/how-to-save-money"
                  className="btn btn-primary"
                  style={{
                    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                    borderRadius: 3,
                    border: 0,
                    color: "white",
                    height: 30,
                    width: 90,
                    padding: "8px 10px",
                    boxShadow: "0 3px 5px 2px #4a148c 30%",
                    marginLeft: 0,
                    fontSize: '10px'
                  }}
                  target="_blank"
                >
                  Go to Article
                </a>
              </>
            ) : null}
            {localState.outputTips === 2 ? (
              <>
                <h2> How to Save for a House </h2> <h4>By Luisa Rollenhagen</h4>{" "}
                <h5>10 min Read</h5>{" "}
                <h5>
                  Advice, tips and tricks you need to save for your dream home.
                  Find out how to save for a downpayment and a house itself...
                </h5>{" "}
                <a
                  href="https://www.wealthsimple.com/en-ca/learn/how-to-save-for-a-house"
                  class="btn btn-primary"
                  style={{
                    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                    borderRadius: 3,
                    border: 0,
                    color: "white",
                    height: 30,
                    width: 90,
                    padding: "8px 10px",
                    boxShadow: "0 3px 5px 2px #4a148c 30%",
                    marginLeft: 0,
                    fontSize: '10px'
                  }}
                  target="_blank"
                >
                  Go to Article
                </a>
              </>
            ) : null}
            {localState.outputTips === 3 ? (
              <>
                <h2> The Ultimate Guide to Money Management </h2>{" "}
                <h4>By Katherine Gustafson</h4> <h5>13 min Read</h5>{" "}
                <h5>
                  Managing your money is deceptively difficult. Even those with
                  a lot of it can easily put themselves in a financial hole. And
                  those who...
                </h5>{" "}
                <a
                  href="https://www.wealthsimple.com/en-ca/learn/how-to-manage-money"
                  class="btn btn-primary"
                  style={{
                    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                    borderRadius: 3,
                    border: 0,
                    color: "white",
                    height: 30,
                    width: 90,
                    padding: "8px 10px",
                    boxShadow: "0 3px 5px 2px #4a148c 30%",
                    marginLeft: 0,
                    fontSize: '10px'
                  }}
                  target="_blank"
                >
                  Go to Article
                </a>
              </>
            ) : null}
            {localState.outputTips === 4 ? (
              <>
                <h2> How To Retire Early </h2> <h4>By Michael Allen, CIM</h4>{" "}
                <h5>8 min Read</h5>{" "}
                <h5>
                  Done with being a working stiff and ready to let loose as a
                  spry young retiree? We've got your guide to retiring early.
                  Really early...
                </h5>{" "}
                <a
                  href="https://www.wealthsimple.com/en-ca/learn/how-to-retire-early"
                  class="btn btn-primary"
                  style={{
                    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                    borderRadius: 3,
                    border: 0,
                    color: "white",
                    height: 30,
                    width: 90,
                    padding: "8px 10px",
                    boxShadow: "0 3px 5px 2px #4a148c 30%",
                    marginLeft: 0,
                    fontSize: '10px'
                  }}
                  target="_blank"
                >
                  Go to Article
                </a>
              </>
            ) : null}
          </Card>
        )}

        <div className="goals-buttons-container">
          <MUButton
          style={{
            ...style,
            background: button1.color,
            width: 105 - button1.x,
            marginLeft: button1.x
          }}
          onMouseLeave={() =>
            setButton1({
              ...button1,
              color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)"
            })
          }
          onMouseOver={() =>
            setButton1({
              ...button1,
              color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)"
            })
          }
          onMouseUp={() =>
            setButton1({
              ...button1,
              x: 0
            })
          }
          onMouseDown={() =>
            setButton1({
              ...button1,
              x: 2
            })
          }
            onClick={() => setLocalState({ outputTips: 1 })}
          >
            How To Save Money - Top Saving Tips
          </MUButton>
          <MUButton
          style={{
            ...style,
            background: button1.color,
            width: 105 - button1.x,
            marginLeft: button1.x
          }}
          onMouseLeave={() =>
            setButton2({
              ...button1,
              color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)"
            })
          }
          onMouseOver={() =>
            setButton2({
              ...button1,
              color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)"
            })
          }
          onMouseUp={() =>
            setButton2({
              ...button1,
              x: 0
            })
          }
          onMouseDown={() =>
            setButton2({
              ...button1,
              x: 2
            })
          }
            onClick={() => setLocalState({ outputTips: 2 })}
            className="goals-button"
          >
            How to Save for a House
          </MUButton>
          <MUButton
          style={{
            ...style,
            background: button1.color,
            width: 105 - button1.x,
            marginLeft: button1.x
          }}
          onMouseLeave={() =>
            setButton3({
              ...button1,
              color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)"
            })
          }
          onMouseOver={() =>
            setButton3({
              ...button1,
              color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)"
            })
          }
          onMouseUp={() =>
            setButton3({
              ...button1,
              x: 0
            })
          }
          onMouseDown={() =>
            setButton3({
              ...button1,
              x: 2
            })
          }
            onClick={() => setLocalState({ outputTips: 3 })}
            className="goals-button"
          >
            The Ultimate Guide to Money Management
          </MUButton>
          <MUButton
          style={{
            ...style,
            background: button1.color,
            width: 105 - button1.x,
            marginLeft: button1.x
          }}
          onMouseLeave={() =>
            setButton4({
              ...button1,
              color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)"
            })
          }
          onMouseOver={() =>
            setButton4({
              ...button1,
              color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)"
            })
          }
          onMouseUp={() =>
            setButton4({
              ...button1,
              x: 0
            })
          }
          onMouseDown={() =>
            setButton4({
              ...button1,
              x: 2
            })
          }
            onClick={() => setLocalState({ outputTips: 4 })}
            className="goals-button"
          >
            How to Retire Early
          </MUButton>
        </div>
      </div>
    </Grid>
  );
}

export default CardGoalsTips;
