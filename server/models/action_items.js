module.exports = (Sequelize, DataTypes) => {
    const ActionItems = Sequelize.define(
        "actionItems",
        {
            action_item_id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
            },
            email_id:{
              type:DataTypes.STRING,
              allowNull: false
            },
            action_item:{
                 type:DataTypes.STRING,
                 allowNull: false
            },
            created_at:{
                type:'TIMESTAMP',
                allowNull: false
            },
            created_by:{
               type:DataTypes.STRING,
               allowNull: false
            },
            meeting_id:{
               type:DataTypes.STRING,
               allowNull: false           
            },
            feedback_id:{
                type:DataTypes.STRING,
                allowNull: false           
             },
             status:{
                type:DataTypes.STRING,
                allowNull: false           
             }
        },
        {
            timestamps: false,
            modelName: "one-one-meeting-scheduler",
            tableName: "action_items",
        },
    );

    return ActionItems;
};
