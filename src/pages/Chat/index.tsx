export default function Chat() {
    return (
        <div id="chat">
            <div className="container">
                <div className="header">
                    <a href="#"><span className="ep--arrow-left exit_arrow"></span></a>
                    <div className="user">
                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avater" />
                        <div className="text_area">
                            <span className="name">Juliana Stein</span>
                            <p>Active now<span className="status_dot material-symbols--circle"></span></p>
                        </div>
                    </div>
                </div>
                <div className="chat_area">
                    <div className="message incoming">
                        <div className="message_info">
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avater" />
                        </div>
                        <div className="message_content">
                            <div className="send_message">
                                <p>Hey There!</p>
                            </div>
                            <span className="send_time">Today. 8.30pm</span>
                        </div>
                    </div>
                    <div className="message incoming">
                        <div className="message_info">
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avater" />
                        </div>
                        <div className="message_content">
                            <div className="send_message">
                                <p>How are you?</p>
                            </div>
                            <span className="send_time">Today. 8.30pm</span>
                        </div>
                    </div>
                    <div className="message outgoing">
                        <div className="message_content">
                            <div className="send_message">
                                <p>Hello!</p>
                            </div>
                            <span className="send_time">Today. 8.33pm</span>
                        </div>
                    </div>
                    <div className="message outgoing">
                        <div className="message_content">
                            <div className="send_message">
                                <p>I am fine one how are you?</p>
                            </div>
                            <span className="send_time">Today. 8.34pm</span>
                        </div>
                    </div>
                    <div className="message incoming">
                        <div className="message_info">
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avater" />
                        </div>
                        <div className="message_content">
                            <div className="send_message">
                                <p>I am doing well, Can we meet tomorrow?</p>
                            </div>
                            <span className="send_time">Today. 8.36pm</span>
                        </div>
                    </div>
                    <div className="message outgoing">
                        <div className="message_content">
                            <div className="send_message">
                                <p>Yes Sure!</p>
                            </div>
                            <span className="send_time">Today. 8.55pm</span>
                        </div>
                    </div>
                </div>
                <div className="input_area">
                    <input type="text" placeholder="Type a message here..." />
                    <button><span className="bi--send-fill send"></span></button>
                </div>
            </div>
        </div>
    )
}
