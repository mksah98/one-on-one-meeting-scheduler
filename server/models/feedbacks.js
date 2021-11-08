
module.exports =(Sequelize, DataTypes)=> {
    const Feedback = Sequelize.define('feedbacks',
    {
        feedback_id: {
            type: DataTypes.INTEGER,
            primaryKey: true

        },
        email_id: {
            type: DataTypes.STRING,
            isEmail: true,
            required: true,
        },
        feedback: {
            type: DataTypes.STRING,
            required:true,
        },
        created_at: {
            type:'TIMESTAMP',
            required:true,
        },
        created_by:{
            type:DataTypes.STRING,
            allowNull: false
        },
        meeting_id:{
            type: DataTypes.INTEGER,
            required : true,
        }
    },
    {

        timestamps: false,
        modelName: "one-one-meeting-scheduler",
        tableName: "feedbacks",
    }
    );
    return Feedback;
};