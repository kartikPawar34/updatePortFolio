
function ConnectMeSection () {

    const contactInfo = [
        { label: "Gmail : ", value: "kp346949@gmail.com"},
        { label: "Phone Number: ", value: "+91 9685467114"},
        { label: "Current Location: ", value: "Jabalpur, MP, India"},
    ];

    return (
        <div className="flex">
            
            <div className="w-full ">
                <h3 className="text-3xl">Get In Touch</h3>
                <div className="space">
                    {contactInfo.map((contact) => (
                        <div key={contact.label} className="flex">
                            <div>
                                <p className="text-sm">{contact.label} {contact.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ConnectMeSection;